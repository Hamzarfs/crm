import { isEmpty, isEmptyArray, isNullOrUndefined } from './helpers'

// 👉 Required Validator
export const requiredValidator = (value: unknown) => {
    if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
        return 'This field is required'

    return !!String(value).trim().length || 'This field is required'
}

// 👉 Number Validator
export const numberValidator = (value: unknown) => {
    // if (typeof value !== 'number')
    //     return 'This field must be a number'

    // return !!String(value).trim().length || 'This field must be a number'
    if (typeof value !== 'string')
        return 'This field must be a string';

    // Regular expression to check if string contains numbers 0-9 and a + sign
    const regex = /^[+]?[\d]+$/;

    return regex.test(value.trim()) || 'This field must contain numbers and optionally a + sign in start';
}

// 👉 Email Validator
export const emailValidator = (value: unknown) => {
    if (isEmpty(value))
        return true

    const re = /^(?:[^<>()[\]\\.,;:\s@"]+(?:\.[^<>()[\]\\.,;:\s@"]+)*|".+")@(?:\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]|(?:[a-z\-\d]+\.)+[a-z]{2,})$/i

    if (Array.isArray(value))
        return value.every(val => re.test(String(val))) || 'The Email field must be a valid email'

    return re.test(String(value)) || 'The Email field must be a valid email'
}

// 👉 Password Validator
export const passwordValidator = (password: string) => {
    const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/

    const validPassword = regExp.test(password)

    return validPassword || 'Field must contain at least one uppercase, lowercase, special character and digit with min 8 chars'
}

// 👉 Confirm Password Validator
export const confirmedValidator = (value: string, target: string) =>

    value === target || 'The Confirm Password field confirmation does not match'

// 👉 Between Validator
export const betweenValidator = (value: unknown, min: number, max: number) => {
    const valueAsNumber = Number(value)

    return (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) || `Enter number between ${min} and ${max}`
}

// 👉 Integer Validator
export const integerValidator = (value: unknown) => {
    if (isEmpty(value))
        return true

    if (Array.isArray(value))
        return value.every(val => /^-?\d+$/.test(String(val))) || 'This field must be an integer'

    return /^-?\d+$/.test(String(value)) || 'This field must be an integer'
}

// 👉 Regex Validator
export const regexValidator = (value: unknown, regex: RegExp | string): string | boolean => {
    if (isEmpty(value))
        return true

    let regeX = regex
    if (typeof regeX === 'string')
        regeX = new RegExp(regeX)

    if (Array.isArray(value))
        return value.every(val => regexValidator(val, regeX))

    return regeX.test(String(value)) || 'The Regex field format is invalid'
}

// 👉 Alpha Validator
export const alphaValidator = (value: unknown) => {
    if (isEmpty(value))
        return true

    return /^[A-Z]*$/i.test(String(value)) || 'The Alpha field may only contain alphabetic characters'
}

// 👉 URL Validator
export const urlValidator = (value: unknown) => {
    if (isEmpty(value))
        return true

    const re = /^https?:\/\/[^\s$.?#].\S*$/

    return re.test(String(value)) || 'URL is invalid'
}

// 👉 Length Validator
export const lengthValidator = (value: unknown, length: number) => {
    if (isEmpty(value))
        return true

    return String(value).length === length || `The Min Character field must be at least ${length} characters`
}

// 👉 Alpha-dash Validator
export const alphaDashValidator = (value: unknown) => {
    if (isEmpty(value))
        return true

    const valueAsString = String(value)

    return /^[\w-]*$/.test(valueAsString) || 'All Character are not valid'
}

// 👉 File Validator For Tasks & Task Comments
export const fileValidator = (files: File[]) => {
    const allowedExtensions = ['image/*', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt']
    if (isEmpty(files))
        return true

    for (const file of files) {
        const fileExtensionInfo = file.type.split('/')
        const fileType = fileExtensionInfo[0]
        const fileExtension = fileExtensionInfo[1]

        if (!(
            (fileType === 'image' && allowedExtensions.includes('image/*')) ||
            allowedExtensions.includes(fileType) ||
            allowedExtensions.includes(fileExtension)
        )) return `File type ${file.type} is not allowed`
    }
    return true
}
