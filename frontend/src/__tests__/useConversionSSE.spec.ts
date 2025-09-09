import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useConversion } from '@/composables/useConversion'

vi.mock('primevue/usetoast', () => {
    return {
        useToast: () => ({
            add: vi.fn(),
            push: vi.fn(),
        }),
    }
})

global.fetch = vi.fn()


describe('useConversion composable', () => {
    let composable: ReturnType<typeof useConversion>

    beforeEach(() => {
        composable = useConversion()
        vi.clearAllMocks()
    })

    it('should convert a valid number', async () => {
        ; (fetch as any).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ result: 'IX' }),
        })

        composable.value.value = 9
        await composable.convert()

        expect(fetch).toHaveBeenCalledWith(
            "http://localhost:3000/conversion/roman",
            expect.objectContaining({
                method: 'POST',
                body: JSON.stringify({ number: 9 }),
                headers: expect.objectContaining({
                    'Content-Type': 'application/json',
                }),
            })
        )

        expect(composable.result.value).toBe('IX')
        expect(composable.error.value).toBeNull()
    })

    it('should handle conversion error', async () => {
        ; (fetch as any).mockResolvedValueOnce({
            ok: false,
            json: async () => ({ error: 'Conversion failed' }),
        })

        composable.value.value = 200
        await composable.convert()

        expect(composable.result.value).toBeNull()
        expect(composable.error.value).toBe('Conversion failed')
    })
})
