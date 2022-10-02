<script>
    import { closeModal } from "svelte-modals";

    // provided by <Modals />
    export let isOpen;

    export let message;
</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <div class="contents">
            <h2>Create a new Group</h2>
            <p>{message}</p>
            <div class="actions">
                <button on:click={closeModal}>Create</button>
                <button on:click={closeModal}>Abort</button>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal h2 {
        font-size: 1.2rem;
    }

    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        pointer-events: none;
    }

    .contents {
        background: var(--color-6);
        color: var(--color-1);

        min-width: 20em;
        border-radius: 5px;
        padding: 0.5ch 1ch;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        pointer-events: auto;
    }

    p {
        text-align: center;
        margin-top: 16px;
    }

    .actions {
        margin-top: 32px;
        display: flex;
        justify-content: flex-end;
    }
</style>
