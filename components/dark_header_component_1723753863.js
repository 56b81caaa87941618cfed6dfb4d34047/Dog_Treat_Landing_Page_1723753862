/* Summary: Contains a header fixed at the top of the page.
 On the left it has a text serving as branding for the page. On the right is a button to turn dark mode on/off.
*/

Vue.component("dark_header_component_1723753863", {
    template: `
    <header id="header-component" class="z-30 bg-white" style=""><div class="max-w-xl lg:max-w-[calc(50%+theme(maxWidth.xl))] mx-auto px-4 sm:px-6" style=""><div class="flex items-center justify-between h-16 md:h-20" style="" data-mf-new="true"><div id="site-branding" class="shrink-0 mr-4 lg:fixed"><a href="index.html" aria-label="Cruip" class="flex items-center space-x-4" style="" data-mf-new="true"><img id="site-logo" src="./images/logo.jpg" width="32" height="32" alt="Mary Rutt" class="rounded-full"> <span id="site-name" class="text-slate-200" style="" data-mf-new="true">aaaaa Twain</span></a></div> <div id="right-side" class="flex grow justify-end"><div id="light-switch-container" class="flex flex-col justify-center"><input type="checkbox" name="light-switch" id="light-switch" class="light-switch peer sr-only" style="position: relative;" data-mf-new="true"> <label id="light-switch-label" for="light-switch" class="relative cursor-pointer h-8 w-8 inline-flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 lg:bg-white lg:border-slate-200 lg:hover:border-slate-300 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 shadow-black/5 transition-colors" style="" data-mf-new="true"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="dark:hidden"> / contenteditable="true"&gt;
                                 / contenteditable="true"&gt;
                            </svg> <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="hidden dark:block"> / contenteditable="true"&gt;
                                 / contenteditable="true"&gt;
                            </svg> <span class="sr-only">Switch to light / dark version</span></label></div></div></div></div></header>
    `,
    data() {
        return {
            siteNameStyle: 'text-slate-200',
            lightSwitchLabelStyle: 'bg-slate-900 border border-slate-800 hover:border-slate-700 lg:bg-white lg:border-slate-200 lg:hover:border-slate-300 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 shadow-black/5 transition-colors',
            lightModeIconStyle: 'dark:hidden',
            darkModeIconStyle: 'hidden dark:block',
            fillLightModeIconPrimaryStyle: 'fill-slate-400 lg:fill-slate-300',
            fillLightModeIconSecondaryStyle: 'fill-slate-500 lg:fill-slate-400',
            fillDarkModeIconPrimaryStyle: 'fill-slate-500',
            fillDarkModeIconSecondaryStyle: 'fill-slate-400'
        };
    },
    methods: {
        toggleDarkMode() {
            if (localStorage.getItem('dark-mode') === 'false' || !('dark-mode' in localStorage)) {
                console.log("for the dark mode button");
                document.querySelector('html').classList.remove('dark');
                localStorage.setItem('dark-mode', 'true');
            } else {
                console.log("for the light mode button");
                document.querySelector('html').classList.add('dark');
                localStorage.setItem('dark-mode', 'false');
            }
        },
    },
    mounted() {
        if (localStorage.getItem('dark-mode') === 'true') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    },
});
