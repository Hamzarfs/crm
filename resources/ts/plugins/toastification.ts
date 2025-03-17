import type { App } from 'vue';
import Toast, { PluginOptions, POSITION } from "vue-toastification";

export default function (app: App) {
    const options: PluginOptions = {
        position: POSITION.BOTTOM_RIGHT,
        showCloseButtonOnHover: true,
    };
    app.use(Toast, options)
}
