/*
 * Copyright (c) 2022-2022. Revo Digital
 * ---
 * Author: gabrielecavallo
 * File: file.ts
 * Project: school-register-webclient
 * Committed last: 2022/9/2 @ 117
 * ---
 * Description:
 */

export const isLongherThan = <T>(vett: number[], n: number): T => {
    return vett.length > n as unknown as T
}

const t = isLongherThan<boolean>([4, 5, 8], 5)