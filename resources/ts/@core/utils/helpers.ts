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

// 👉 IsObject
export const isObjectEmpty = (obj: unknown): obj is Record<string, unknown> =>
    isObject(obj) && Object.keys(obj).length < 1

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

export const resolveLeadStatusVariant = (status: string) => {
    const successStatuses = ['Sale closed']
    const errorStatuses = ['No answer', 'Hung up', 'Wrong number', 'Voice mail', 'Found someone', 'Not interested', 'Blocked', 'Cant connect', 'Not in service', 'Invalid lead', 'No number', 'Not interested', 'Garbage', 'Lost (Projects with others)']

    if (successStatuses.includes(status))
        return 'success'
    else if (errorStatuses.includes(status))
        return 'error'
    else
        return 'primary'
}

export const formatBytes = (bytes: number): string =>
    (bytes >= 1024 * 1024) ? (bytes / (1024 * 1024)).toFixed(2) + ' MB' : (bytes / 1024).toFixed(2) + ' KB'

export const slugify =
    (text: string): string => text
        ?.toLowerCase() // Convert to lowercase
        ?.replace(/\s+/g, '-') // Replace spaces with hyphens
        ?.trim() // Remove leading/trailing spaces
        ?.replace(/[^a-z0-9 -]/g, '') // Remove special characters except spaces and hyphens
        ?.replace(/-+/g, '-'); // Remove multiple consecutive hyphens
