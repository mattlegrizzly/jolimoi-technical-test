import { ref } from 'vue'
import { useToast } from 'primevue'

export function useConversionSSE() {
    const toast = useToast();
    const value = ref<number | null>(null)
    const result = ref<string | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    const showError = () => {
        toast.add({ severity: 'error', summary: 'Error Message', detail: error.value, life: 3000 });
    }

    const apiUrl = import.meta.env.VITE_API_URL || ''

    /**
     * Uses Server-Sent Events (SSE) to convert a number to a Roman numeral.
     * Listens for messages from the server and updates the result accordingly.
     * Handles errors and updates loading state.
     */
    function convert() {

        try {
            if (value.value === null) {
                throw new Error('Value is null');
            }
            loading.value = true
            error.value = null
            result.value = null
            const evtSource = new EventSource(`${apiUrl}conversion/roman-sse?number=${value.value}`)

            evtSource.onmessage = (event) => {
                const data = JSON.parse(event.data)
                result.value = data.result
                evtSource.close()
                loading.value = false
            }

            evtSource.onerror = (err) => {
                error.value = 'SSE connection error'
                evtSource.close()
                loading.value = false
            }
        } catch (err: any) {
            console.log(err);
            error.value = err.message || 'Unknown error'
            showError();
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
