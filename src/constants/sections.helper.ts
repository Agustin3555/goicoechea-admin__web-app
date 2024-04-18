import { InputHTMLAttributes } from 'react'
import { Validation } from '.'
import { UserModel } from '@/models'

export interface Checkbox {
  defaultValue: boolean
}

export interface Input {
  validations?: Validation[]
  inputExtraAttrs?: InputHTMLAttributes<HTMLInputElement>
  defaultValue?: number
}

export interface Selector {
  sectionDependency?: SectionKeys[]
}

export interface InputSelector extends Input, Selector {}

export interface Field {
  title: string
}

export interface SingleField extends Field {
  extra: Checkbox | Input | Selector | InputSelector
}

export interface GroupField extends Field {
  fields: {
    [key: string]: SingleField
  }
}

export enum SectionKeys {
  SALES = 'sales',
  OFFERS = 'offers',
  PRODUCTS = 'products',
  MANUFACTURERS = 'manufacturers',
  CATEGORIES = 'categories',
  USERS = 'users',
  ME = 'me',
}

export enum SALE_VIEW_KEYS {
  view = 'view',
}

export enum OFFER_VIEW_KEYS {
  view = 'view',
}

export enum PRODUCT_VIEW_KEYS {
  search = 'search',
  new = 'new',
}

export enum PRODUCT_FIELD_KEYS {
  category = 'category',
  manufacturer = 'manufacturer',
  createdByUser = 'createdByUser',
  updatedByUser = 'updatedByUser',
  chars = 'chars',
  booleanChars = 'booleanChars',
  quantityChars = 'quantityChars',
  fractionChars = 'fractionChars',
  stringChars = 'stringChars',
  name = 'name',
  description = 'description',
  initialStock = 'initialStock',
  stock = 'stock',
  minStock = 'minStock',
  price = 'price',
  imported = 'imported',
  discontinued = 'discontinued',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum PRODUCT_BOOLEAN_CHARS_FIELD_KEYS {
  key = 'key',
  value = 'value',
}

export enum PRODUCT_QUANTITY_CHARS_FIELD_KEYS {
  key = 'key',
  value = 'value',
  unit = 'unit',
}

export enum PRODUCT_FRACTION_CHARS_FIELD_KEYS {
  key = 'key',
  numeratorValue = 'numeratorValue',
  denominatorValue = 'denominatorValue',
  unit = 'unit',
}

export enum PRODUCT_STRING_CHARS_FIELD_KEYS {
  key = 'key',
  value = 'value',
}

export enum MANUFACTURER_VIEW_KEYS {
  view = 'view',
}

export enum CATEGORY_VIEW_KEYS {
  view = 'view',
}

export enum USER_VIEW_KEYS {
  view = 'view',
}

export enum ME_VIEW_KEYS {
  profile = 'profile',
}

export const SECTIONS: {
  [key: string]: {
    title: string
    faIcon: string
    views: {
      [key: string]: {
        title: string
        faIcon: string
      }
    }
    fields?: {
      [key: string]: Field | SingleField | GroupField
    }
  }
} = {
  [SectionKeys.SALES]: {
    title: 'Ventas',
    faIcon: 'fa-solid fa-cash-register',
    views: {
      [SALE_VIEW_KEYS.view]: {
        title: 'view',
        faIcon: '',
      },
    },
  },
  [SectionKeys.OFFERS]: {
    title: 'Ofertas',
    faIcon: 'fa-solid fa-fire',
    views: {
      [OFFER_VIEW_KEYS.view]: {
        title: 'view',
        faIcon: '',
      },
    },
  },
  [SectionKeys.PRODUCTS]: {
    title: 'Productos',
    faIcon: 'fa-solid fa-boxes-stacked',
    views: {
      [PRODUCT_VIEW_KEYS.search]: {
        title: 'Buscar',
        faIcon: 'fa-solid fa-magnifying-glass',
      },
      [PRODUCT_VIEW_KEYS.new]: {
        title: 'Nuevo',
        faIcon: 'fa-solid fa-plus',
      },
    },
    fields: {
      [PRODUCT_FIELD_KEYS.createdAt]: {
        title: 'Creación',
      },
      [PRODUCT_FIELD_KEYS.updatedAt]: {
        title: 'Última actualización',
      },
      [PRODUCT_FIELD_KEYS.createdByUser]: {
        title: 'Usuario creador',
      },
      [PRODUCT_FIELD_KEYS.updatedByUser]: {
        title: 'Usuario actualizador',
      },
      [PRODUCT_FIELD_KEYS.name]: {
        title: 'Nombre',
        extra: {
          inputExtraAttrs: { autoComplete: 'nope' },
        },
      },
      [PRODUCT_FIELD_KEYS.description]: {
        title: 'Descripción',
        extra: {},
      },
      [PRODUCT_FIELD_KEYS.stock]: {
        title: 'Stock',
        extra: {},
      },
      [PRODUCT_FIELD_KEYS.initialStock]: {
        title: 'Stock inicial',
        extra: {
          validations: [
            {
              validation: value => (value as number) < 0,
              errorMsg: 'No puede ser menor que 0',
            },
          ],
          inputExtraAttrs: { type: 'number', min: 0 },
          defaultValue: 0,
        },
      },
      [PRODUCT_FIELD_KEYS.minStock]: {
        title: 'Stock mínimo',
        extra: {
          validations: [
            {
              validation: value => (value as number) < 0,
              errorMsg: 'No puede ser menor que 0',
            },
          ],
          inputExtraAttrs: { type: 'number', min: 0 },
          defaultValue: 0,
        },
      },
      [PRODUCT_FIELD_KEYS.price]: {
        title: 'Precio',
        extra: {
          validations: [
            {
              validation: value => (value as number) < 0,
              errorMsg: 'No puede ser menor que 0',
            },
          ],
          inputExtraAttrs: { type: 'number', min: 0 },
          defaultValue: 0,
        },
      },
      [PRODUCT_FIELD_KEYS.imported]: {
        title: 'Importado',
        extra: {
          defaultValue: false,
        },
      },
      [PRODUCT_FIELD_KEYS.discontinued]: {
        title: 'Descontinuado',
        extra: {
          defaultValue: false,
        },
      },
      [PRODUCT_FIELD_KEYS.category]: {
        title: 'Categoría',
        extra: {
          sectionDependency: [SectionKeys.CATEGORIES],
        },
      },
      [PRODUCT_FIELD_KEYS.manufacturer]: {
        title: 'Fabricante',
        extra: {
          sectionDependency: [SectionKeys.MANUFACTURERS],
        },
      },
      [PRODUCT_FIELD_KEYS.chars]: {
        title: 'Características',
      },
      [PRODUCT_FIELD_KEYS.booleanChars]: {
        title: 'Características por cantidad',
        fields: {
          [PRODUCT_BOOLEAN_CHARS_FIELD_KEYS.key]: {
            title: 'Nombre',
            extra: {
              sectionDependency: [SectionKeys.PRODUCTS],
            },
          },
          [PRODUCT_BOOLEAN_CHARS_FIELD_KEYS.value]: {
            title: 'Valor',
            extra: {
              defaultValue: false,
            },
          },
        },
      },
      [PRODUCT_FIELD_KEYS.quantityChars]: {
        title: 'Características por cantidad',
        fields: {
          [PRODUCT_QUANTITY_CHARS_FIELD_KEYS.key]: {
            title: 'Nombre',
            extra: {
              sectionDependency: [SectionKeys.PRODUCTS],
            },
          },
          [PRODUCT_QUANTITY_CHARS_FIELD_KEYS.value]: {
            title: 'Valor',
            extra: {
              sectionDependency: [SectionKeys.PRODUCTS],
              inputExtraAttrs: { type: 'number' },
            },
          },
          [PRODUCT_QUANTITY_CHARS_FIELD_KEYS.unit]: {
            title: 'Unidad',
            extra: {
              sectionDependency: [SectionKeys.PRODUCTS],
            },
          },
        },
      },
      [PRODUCT_FIELD_KEYS.fractionChars]: {
        title: 'Características por cantidad',
        fields: {
          [PRODUCT_FRACTION_CHARS_FIELD_KEYS.key]: {
            title: 'Nombre',
            extra: {
              sectionDependency: [SectionKeys.PRODUCTS],
            },
          },
          [PRODUCT_FRACTION_CHARS_FIELD_KEYS.numeratorValue]: {
            title: 'Numerador',
            extra: {
              sectionDependency: [SectionKeys.PRODUCTS],
              inputExtraAttrs: { type: 'number' },
            },
          },
          [PRODUCT_FRACTION_CHARS_FIELD_KEYS.denominatorValue]: {
            title: 'Denominador',
            extra: {
              sectionDependency: [SectionKeys.PRODUCTS],
              inputExtraAttrs: { type: 'number' },
            },
          },
          [PRODUCT_FRACTION_CHARS_FIELD_KEYS.unit]: {
            title: 'Unidad',
            extra: {
              sectionDependency: [SectionKeys.PRODUCTS],
            },
          },
        },
      },
      [PRODUCT_FIELD_KEYS.stringChars]: {
        title: 'Características por cantidad',
        fields: {
          [PRODUCT_STRING_CHARS_FIELD_KEYS.key]: {
            title: 'Nombre',
            extra: {
              sectionDependency: [SectionKeys.PRODUCTS],
            },
          },
          [PRODUCT_STRING_CHARS_FIELD_KEYS.value]: {
            title: 'Valor',
            extra: {
              sectionDependency: [SectionKeys.PRODUCTS],
            },
          },
        },
      },
    },
  },
  [SectionKeys.MANUFACTURERS]: {
    title: 'Fabricantes',
    faIcon: 'fa-solid fa-industry',
    views: {
      [MANUFACTURER_VIEW_KEYS.view]: {
        title: 'view',
        faIcon: '',
      },
    },
  },
  [SectionKeys.CATEGORIES]: {
    title: 'Categorías',
    faIcon: 'fa-solid fa-sitemap',
    views: {
      [CATEGORY_VIEW_KEYS.view]: {
        title: 'view',
        faIcon: '',
      },
    },
  },
  [SectionKeys.USERS]: {
    title: 'Usuarios',
    faIcon: 'fa-solid fa-users',
    views: {
      [USER_VIEW_KEYS.view]: {
        title: 'view',
        faIcon: '',
      },
    },
  },
  [SectionKeys.ME]: {
    title: 'Mi cuenta',
    faIcon: 'fa-solid fa-user',
    views: {
      [ME_VIEW_KEYS.profile]: {
        title: 'Perfil',
        faIcon: 'fa-solid fa-address-card',
      },
    },
  },
}

export const ALLOWED_SECTIONS: Record<
  UserModel.UserRole,
  Record<'top' | 'bot', Partial<Record<SectionKeys, string[]>>>
> = {
  [UserModel.UserRole.EMPLOYEE]: {
    top: {
      [SectionKeys.SALES]: [SALE_VIEW_KEYS.view],
      [SectionKeys.OFFERS]: [OFFER_VIEW_KEYS.view],
      [SectionKeys.PRODUCTS]: [PRODUCT_VIEW_KEYS.new, PRODUCT_VIEW_KEYS.search],
      [SectionKeys.MANUFACTURERS]: [MANUFACTURER_VIEW_KEYS.view],
      [SectionKeys.CATEGORIES]: [CATEGORY_VIEW_KEYS.view],
    },
    bot: { [SectionKeys.ME]: [ME_VIEW_KEYS.profile] },
  },
  [UserModel.UserRole.ADMIN]: {
    top: {
      [SectionKeys.SALES]: [SALE_VIEW_KEYS.view],
      [SectionKeys.OFFERS]: [OFFER_VIEW_KEYS.view],
      [SectionKeys.PRODUCTS]: [PRODUCT_VIEW_KEYS.new, PRODUCT_VIEW_KEYS.search],
      [SectionKeys.MANUFACTURERS]: [MANUFACTURER_VIEW_KEYS.view],
      [SectionKeys.CATEGORIES]: [CATEGORY_VIEW_KEYS.view],
      [SectionKeys.USERS]: [USER_VIEW_KEYS.view],
    },
    bot: { [SectionKeys.ME]: [ME_VIEW_KEYS.profile] },
  },
}
