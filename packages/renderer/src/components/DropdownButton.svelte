<script>
    let visible = false

    function toggleMenu() {
        visible = !visible
    }
</script>

<style>
    button:hover {
        color: var(--color-6);
    }

    div {
        position: relative;
    }

    .dropdown {
        position: absolute;
        top: 2.5ch;
        right: -0.5ch;
    }

</style>

<div>
    <button class="float-right" title="Add Overlay" on:click="{toggleMenu}">
        <slot>Button</slot>
    </button>

    {#if visible}
    <div class="dropdown">
        <slot name="menu">no menu sadface</slot>
    </div>
    {/if}
</div>