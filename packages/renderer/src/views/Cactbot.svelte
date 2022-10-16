<script>
    import { OverlayURL } from "../lib/url"

    const cactbotUrl = OverlayURL.fromPreset("cactbot_config").compute()
</script>

<style>
    iframe {
        border: none;
        width: 100%;
        height: 100%;
    }
</style>

<iframe title="Cactbot Settings" src={cactbotUrl}></iframe>
