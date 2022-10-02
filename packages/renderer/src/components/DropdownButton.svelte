<script>
    let visible = false;

    function toggleMenu() {
        visible = !visible;
    }
</script>

<div>
    <button title="Add Overlay" on:click={toggleMenu}>
        <slot>Button</slot>
    </button>

    {#if visible}
        <div class="dropdown">
            <slot name="menu">no menu sadface</slot>
        </div>
    {/if}
</div>

<style>
    button:hover {
        color: var(--color-6);
    }

    div {
        position: relative;
        float: right;
    }

    .dropdown {
        position: absolute;
        top: 2.5ch;
        right: -0.5ch;
    }

    button {
        background: transparent;
        border: none;
        color: inherit;
        cursor: pointer;
    }
</style>
