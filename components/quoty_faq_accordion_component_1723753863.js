/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1723753863", {
    template: `
    <section class="py-8 bg-white pl-4">
        <h2 class="text-lg font-semibold mb-5">Frequently Asked Questions About Our Pawsome Treats</h2>
        <!-- Accordion -->
        <div class="space-y-3">
            <!-- Accordion item -->
            <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-lg" :class="[{ 'expanded': term.expanded },accordionGradientStyle]">
                <h3>
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                        <span>{{ term.title }}</span>
                        <svg class="shrink-0 ml-8" width="12" height="12" xmlns="http://www.w3.org/2000/svg" :class="svgFillStyle">
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                        </svg>
                    </button>
                </h3>
                <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }, termsTextStyle]">
                    <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                        <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
                            {{ term.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            accordionGradientStyle: "odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900",
            svgFillStyle: "fill-slate-400 dark:fill-slate-500",
            termsTextStyle: "text-slate-500 dark:text-slate-400",
            terms: [
                { title: "What makes your dog treats special?", description: "Our treats are made with all-natural, high-quality ingredients, specially formulated to support your dog's health and happiness. We use no artificial preservatives, colors, or flavors, ensuring your furry friend gets only the best.", expanded: false },
                { title: "Are your treats suitable for dogs with allergies?", description: "Yes! We offer a range of hypoallergenic treats made with novel proteins and limited ingredients. Always check the ingredient list and consult with your vet if your dog has specific dietary requirements.", expanded: false },
                { title: "How often can I give these treats to my dog?", description: "While our treats are healthy and nutritious, they should be given in moderation as part of a balanced diet. The exact amount depends on your dog's size, age, and activity level. We recommend following the feeding guidelines on the package or consulting with your veterinarian.", expanded: false },
                { title: "Do you offer a satisfaction guarantee?", description: "Absolutely! We stand behind the quality of our treats. If you or your furry friend are not completely satisfied with your purchase, we offer a 30-day money-back guarantee. Just contact our customer service team, and we'll make it right.", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});
