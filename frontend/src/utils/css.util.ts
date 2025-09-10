import { ClassValue } from 'class-variance-authority/types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to intelligently merge class names.
 *
 * Combines conditional class values using `clsx` and then resolves
 * conflicting Tailwind CSS classes with `tailwind-merge`.
 *
 * @param classes - List of class values
 * @returns
 */
export function classMerge(...classes: ClassValue[]) {
    return twMerge(clsx(classes));
}