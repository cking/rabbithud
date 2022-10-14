<script>
    import { OverlayURL } from "../lib/url"

    const cactbotUrl = new OverlayURL("https://quisquous.github.io/cactbot/ui/config/config.html", true).compute()
</script>

<style>
    iframe {
        border: none;
        width: 100%;
        height: 100%;
    }
</style>

<iframe title="Cactbot Settings" src={cactbotUrl}></iframe>
