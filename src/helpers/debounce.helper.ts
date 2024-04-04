type Procedure = (...args: any[]) => void;

interface DebounceOptions {
  leading?: boolean;
  trailing?: boolean;
}

/**
 * Función que devuelve un nuevo procedimiento "debounce".
 *
 * @template T - Tipo del procedimiento original
 * @param {T} func - Procedimiento original a "debouncear"
 * @param {number} waitMilliseconds - Tiempo de espera en milisegundos
 * @param {DebounceOptions} options - Opciones de "debounce"
 * @returns {T} - Procedimiento "debounceado"
 */
export const debounce = <T extends Procedure>(
  func: T,
  waitMilliseconds = 50,
  options: DebounceOptions = {},
): T => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let lastExecutedTimestamp = 0;
  let leadingExecuted = false;
  let lastArgs: Parameters<T> | undefined;

  const leading = options.leading ?? false;
  const trailing = options.trailing ?? true;

  /**
   * Función interna que representa el procedimiento "debounceado".
   *
   * @param {any} thisAux - Valor de "this" para el procedimiento original
   * @param {...Parameters<T>} args - Argumentos para el procedimiento original
   */
  const debouncedFunction = (thisAux: any, ...args: Parameters<T>) => {
    const now = Date.now();

    lastArgs = args;

    /**
     * Función interna que ejecuta el procedimiento original si se cumplen
     * las condiciones de "leading" o "trailing".
     */
    const executeFunction = () => {
      func.apply(thisAux, lastArgs!);
      lastExecutedTimestamp = now;
      leadingExecuted = false;
    };

    // Si "leading" está habilitado y no se ha ejecutado aún, ejecutar inmediatamente.
    if (!leadingExecuted && leading) {
      executeFunction();
      leadingExecuted = true;
    } else {
      // Limpiar el temporizador existente si hay uno.
      if (timeoutId !== undefined) clearTimeout(timeoutId);

      // Configurar un nuevo temporizador para ejecutar el procedimiento después de "waitMilliseconds".
      if (trailing) {
        timeoutId = setTimeout(() => {
          // Ejecutar el procedimiento si ha pasado suficiente tiempo desde la última ejecución.
          const timeSinceLastExecuted = now - lastExecutedTimestamp;
          timeSinceLastExecuted >= waitMilliseconds && executeFunction();
        }, waitMilliseconds);
      } else {
        // Ejecutar el procedimiento sin importar el tiempo si "trailing" está deshabilitado.
        const timeSinceLastExecuted = now - lastExecutedTimestamp;
        timeSinceLastExecuted >= waitMilliseconds && executeFunction();
      }
    }
  };

  return debouncedFunction as any;
};
