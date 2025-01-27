import {
    AccordionMenuItem
} from '@shared/components/accordion/accordion-menu.component';

const SortingAccordionItem =
    (): AccordionMenuItem => ({
        title: 'Sorting',
        options: [
            {
                title: 'Bubble sorting',
                active: false
            },
            {
                title: 'Quick sort',
                active: false
            },
            {
                title: 'Insert sort',
                active: false
            },
            {
                title: 'Merge sort',
                active: false
            }
        ]
    });

const SomethingAccordionItem =
    (): AccordionMenuItem => ({
        title: 'Something',
        options: [
            {
                title: 'Bubble sorting',
                active: false
            },
            {
                title: 'Quick sort',
                active: false
            },
            {
                title: 'Insert sort',
                active: false
            },
            {
                title: 'Merge sort',
                active: false
            }

        ]
    });
export const AlgorithmsAccordion =
    (): AccordionMenuItem[] =>
        ([SortingAccordionItem(), SomethingAccordionItem()]);
