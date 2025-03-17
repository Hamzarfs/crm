import { isEmpty, isEmptyArray, isNullOrUndefined } from './helpers'

// 👉 Required Validator
export const requiredValidator = (value: unknown) => {
    if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
        return 'This field is required'

    return !!String(value).trim().length || 'This field is required'
}

// 👉 Phone Number Validator
export const phoneNumberValidator = (value: string) => {
    if (isEmpty(value))
        return true
    // Regular expression to check if string contains numbers 0-9 and a + sign
    const regex = /^[+]?[\d]+$/;

    return regex.test(value.trim()) || 'This field must contain numbers and optionally a + sign in start';
}

// 👉 Number Validator
export const numberValidator = (value: string) => {
    if (isEmpty(value))
        return true
    // Regular expression to check if string contains positive numbers
    const regex = /^[\d]+(\.[\d]+)?$/;

    return regex.test(value.trim()) || 'This field must contain positive numbers';
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
export const confirmedValidator = (value: string, target: string) => value === target || 'The Confirm Password field confirmation does not match'

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

    // const re = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}([^\s$.?#].\S*)?$/
    const re = /^https?:\/\/[^\s$.?#].\S*$/

    return re.test(String(value)) || 'URL is invalid'
}

// 👉 Instagram URL Validator
export const instagramUrlValidator = (value: unknown) => {
    if (isEmpty(value))
        return true

    // Regular expression to validate Instagram URLs
    const re = /^(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9._-]+\/?$/

    return re.test(String(value)) || 'URL must be a valid Instagram URL'
}

// 👉 Facebook URL Validator
export const facebookUrlValidator = (value: unknown) => {
    if (isEmpty(value))
        return true

    // Regular expression to validate Facebook URLs
    const re = /^(https?:\/\/)?(www\.)?facebook\.com\/[A-Za-z0-9._-]+\/?$/

    return re.test(String(value)) || 'URL must be a valid Facebook URL'
}

// 👉 Length Validator
export const lengthValidator = (value: unknown, length: number) => {
    if (isEmpty(value))
        return true

    return String(value).length === length || `The Min Character field must be at least ${length} characters`
}

// 👉 Max file Validator
export const fileLengthValidator = (value: number, length: number) => {
    if (isEmpty(value))
        return true

    return value <= length || `Maximum ${length} files are allowed at a time.`
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
