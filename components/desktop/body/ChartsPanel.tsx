import AccordionGroup from "@/components/UI/Accordion/AccordionGroup";
import AccordionItem from "@/components/UI/Accordion/AccordionItem";
import AccordionOption from "@/components/UI/Accordion/AccordionOption";

const ChartsPanel = () => {
  return (
    <div className="py-2 pr-1 ml-1 min-w-44 border-r self-stretch">
      <AccordionGroup title="Group title">
        <AccordionOption title="Option">
          <AccordionItem label="Item 1" />
          <AccordionItem label="Item 2" />
        </AccordionOption>

        <AccordionOption title="Option">
          <AccordionItem label="Item 1" />
          <AccordionItem label="Item 2" />
          <AccordionItem label="Item 3" />
          <AccordionItem label="Item 4" />
          <AccordionItem label="Item 5" />
        </AccordionOption>
      </AccordionGroup>
    </div>
  );
};

export default ChartsPanel;
