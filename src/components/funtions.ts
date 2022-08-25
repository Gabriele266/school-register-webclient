export function msToTime(ms: number): string {
        const date = new Date(ms)
        const y = date.getFullYear()
        const m = date.getMonth()
        const d = date.getDay()

        return `${y}-${m < 10 ? `0${m}` : m}-${d < 10 ? `0${d}` : d}`
    }

export function timeToMs(time: Date): number {
        return time.getTime();
    }