/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1723753863", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-white">
        <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4">Details</h2>
        <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
            <li id="project-length" class="px-5 py-4 rounded-lg" :class="detailsListStyle">
                <div class="font-medium" :class="detailsComponentTextStyle">All-Natural Ingredients</div>
                <div :class="detailsComponentTextSecondaryStyle">We use only the finest, human-grade ingredients to ensure your furry friend gets the best nutrition possible.</div>
            </li>
            <li id="start-date" class="px-5 py-4 rounded-lg" :class="detailsListStyle">
                <div class="font-medium" id="start-date-des-1" :class="detailsComponentTextStyle">Tail-Wagging Flavors</div>
                <time :class="detailsComponentTextSecondaryStyle" id="start-time-des-1">From savory chicken to sweet pumpkin, our diverse range of flavors will keep your pup excited for every treat.</time>
            </li>
            <li id="end-date" class="px-5 py-4 rounded-lg" :class="detailsListStyle">
                <div class="font-medium" id="end-date-des-1" :class="detailsComponentTextStyle">Vet-Approved Formula</div>
                <time :class="detailsComponentTextSecondaryStyle" id="end-time-des-1">Our treats are developed with veterinary nutritionists to support your dog's health and well-being.</time>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
            detailsListStyle: "bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900",
            detailsComponentTextStyle: "text-slate-200",
            detailsComponentTextSecondaryStyle: "text-slate-400"
        };
    },
});

