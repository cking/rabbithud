<script>
    import { OverlayURL } from "../lib/url"

    const cactbotUrl = new OverlayURL("https://quisquous.github.io/cactbot/ui/config/config.html", true).compute()
</script>

<iframe title="Cactbot Settings" src={cactbotUrl}></iframe>
