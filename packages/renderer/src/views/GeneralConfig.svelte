<script>
    import { config } from "../stores"

    function onPattern(ev) {
        if (ev.key.length > 1) {
            return
        }

        const pattern = ev.target.pattern
        const r = new RegExp('^' + pattern + '$')
        const v = ev.target.value + ev.key
        const match = !!v.match(r)
        if (!match) {
            ev.preventDefault()
        }
    }

    function onSetHotkey (ev) {
        let key = ev.key.replace("Control", "Ctrl")
        if (key == "Meta" && ev.code.startsWith("Alt")) {
            key = "Alt"
        }

        let keyCombo = []
        if (ev.ctrlKey) {
            keyCombo.push("Ctrl")
        }
        if (ev.altKey) {
            keyCombo.push("Alt")
        }
        if (ev.metaKey) {
            keyCombo.push("Meta")
        }
        if (ev.shiftKey) {
            keyCombo.push("Shift")
        }
        if (keyCombo.indexOf(key) < 0) {
            keyCombo.push(key.toUpperCase())
        }

        config.update(v => {
            v.settings.toggleOverlayHotkey = keyCombo.join("+")
            return v
        })
    }

    function onClearHotkey (ev) {
        config.update(v => {
            v.settings.toggleOverlayHotkey = null
            return v
        })
    }
</script>

<fieldset>
    <legend>IINACT</legend>

    <div class="form-row">
        <label for="ip">IP</label>
        <input id="ip" bind:value={$config.settings.ip} on:keydown={onPattern} pattern="[a-z0-9.-:]*">
    </div>
    <div class="form-row">
        <label for="port">Port</label>
        <input id="port" bind:value={$config.settings.port} on:keydown={onPattern} pattern="[1-9][0-9]{'{0,4}'}">
    </div>
    <div class="form-row">
        <label>
            <input type="checkbox" bind:checked={$config.settings.enableSecureProxy}> Enable Websocket Secure Proxy (EXPERIMENTAL!)
        </label>
    </div>
</fieldset>

<fieldset>
    <legend>Cactbot</legend>

    <div class="form-row">
        <label>
            <input type="checkbox" bind:checked={$config.settings.enableCactbot}> Enable
        </label>
    </div>
</fieldset>

<fieldset>
    <legend>Startup</legend>

    <div class="form-row">
        <label>
            <input type="checkbox" bind:checked={$config.settings.showOverlaysOnStartup}> Display Overlays on Start
        </label>
    </div>
    <div class="form-row">
        <label for="hotkey">Hotkey to toggle all Overlays</label>
        <input id="hotkey" placeholder="None" bind:value={$config.settings.toggleOverlayHotkey} on:keydown|preventDefault={onSetHotkey}> <!-- hotkey -->
        <button on:click={onClearHotkey}>❌ Clear</button> <!-- clear hotkey -->
    </div>
</fieldset>
