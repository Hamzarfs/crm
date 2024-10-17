// 👉 IsEmpty
export const isEmpty = (value: unknown): boolean => {
    if (value === null || value === undefined || value === '')
        return true

    return !!(Array.isArray(value) && value.length === 0)
}

// 👉 IsNullOrUndefined
export const isNullOrUndefined = (value: unknown): value is undefined | null => {
    return value === null || value === undefined
}

// 👉 IsEmptyArray
export const isEmptyArray = (arr: unknown): boolean => {
    return Array.isArray(arr) && arr.length === 0
}

// 👉 IsObject
export const isObject = (obj: unknown): obj is Record<string, unknown> =>
    obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj)

// 👉 IsToday
export const isToday = (date: Date) => {
    const today = new Date()

    return (
        date.getDate() === today.getDate()
        && date.getMonth() === today.getMonth()
        && date.getFullYear() === today.getFullYear()
    )
}
export const extractFileExtension = (fileName: string) => fileName.split('.').pop()

export const getInitials = (name?: string) => {
    if (!name) return ''

    const nameParts = name.split(' ')
    const firstNameInitial = nameParts[0]?.[0] ?? ''
    const lastNameInitial = nameParts[1]?.[0] ?? ''
    return firstNameInitial + lastNameInitial
}
