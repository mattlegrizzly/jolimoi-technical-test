import { ref } from 'vue'

export function useConversion() {
    const value = ref<number | null>(null)
    const result = ref<number | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    const apiUrl = import.meta.env.VITE_API_URL || ''

    async function convert() {
        console.log('Converting value:', value.value)
        if (value.value === null) return
        loading.value = true
        error.value = null
        try {
            const response = await fetch(`${apiUrl}conversion/roman`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ number: value.value }),
            })
            if (!response.ok) throw new Error('Conversion failed')
            const data = await response.json()
            result.value = data.result
        } catch (err: any) {
            error.value = err.message || 'Unknown error'
        } finally {
            loading.value = false
        }
    }

    return {
        value,
        result,
        loading,
        error,
        convert,
    }
}