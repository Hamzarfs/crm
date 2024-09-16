import moment from 'moment'
import { isToday } from './helpers'

export const avatarText = (value: string) => {
    if (!value)
        return ''
    const nameArray = value.split(' ')

    return nameArray.map(word => word.charAt(0).toUpperCase()).join('')
}

// TODO: Try to implement this: https://twitter.com/fireship_dev/status/1565424801216311297
export const kFormatter = (num: number) => {
    const regex = /\B(?=(\d{3})+(?!\d))/g

    return Math.abs(num) > 9999 ? `${Math.sign(num) * +((Math.abs(num) / 1000).toFixed(1))}k` : Math.abs(num).toFixed(0).replace(regex, ',')
}

/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {string} value date to format
 * @param {Intl.DateTimeFormatOptions} formatting Intl object to format with
 */
export const formatDate = (value: string, formatting: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    if (!value)
        return value

    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {string} value date to format
 * @param {boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */
export const formatDateToMonthShort = (value: string, toTimeForCurrentDay = true) => {
    const date = new Date(value)
    let formatting: Record<string, string> = { month: 'short', day: 'numeric' }

    if (toTimeForCurrentDay && isToday(date))
        formatting = { hour: 'numeric', minute: 'numeric' }

    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

export const prefixWithPlus = (value: number) => value > 0 ? `+${value}` : value

export const slugToTitleCase = (slug: string) => {
    return slug
        .split('_') // Split the slug into words by underscores
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back with a space
}

export const parseDate = (date: string, format: string = 'DD-MM-YYYY') => {
    return moment(date, 'YYYY-MM-DD').format(format)
}

/**
 * Check the status of a deadline
 * @param {string} deadlineDate - The deadline date in 'YYYY-MM-DD' format
 * @returns {'exceeded' | 'approaching' | 'today'} - The status of the deadline
 */
export const checkDeadlineStatus = (deadlineDate: string): 'exceeded' | 'approaching' | 'today' => {
    const today = moment().startOf('day');
    const deadline = moment(deadlineDate).startOf('day');

    if (deadline.isBefore(today)) {
        return 'exceeded';
    } else if (deadline.isAfter(today)) {
        return 'approaching';
    } else {
        return 'today';
    }
}


