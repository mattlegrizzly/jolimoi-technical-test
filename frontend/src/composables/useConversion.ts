import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

export function useConversion() {


    const toast = useToast();
    const value = ref<number | null>(null)
    const result = ref<number | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    const showError = () => {
        toast.add({ severity: 'error', summary: 'Error Message', detail: error.value, life: 3000 });
    };
    const apiUrl = import.meta.env.VITE_API_URL || ''

    /**
     * Converts a number to a Roman numeral by making a POST request to the backend API.
     * Updates the result, loading state, and handles errors.
     */
    async function convert() {
        try {
            if (value.value === null) {
                throw new Error('Value is null');
            }
            loading.value = true
            error.value = null
            const response = await fetch(`${apiUrl}conversion/roman`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ number: value.value }),
            })
            if (!response.ok) {
                const error = await response.json();
                console.log(error);
                let errorMsg = 'Conversion failed';
                if (error && error.error) {
                    errorMsg = error.error;
                }
                error.value = errorMsg;
                throw new Error(errorMsg);
            }
            const data = await response.json()
            result.value = data.result
        } catch (err: any) {
            error.value = err.message || 'Unknown error'
            showError();
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