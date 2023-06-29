import component from "../index.marko";
import testComponent from "./test_template.marko";
import testComponent2 from "./test_template-2.marko";

export default {
  title: "Step Navigator",
  component,
};

function createBody(html) {
  return (out) => out.html(html);
}

export const Default = () => ({
  input: {
    title: "Step Navigator",
    previousStepText:"Previous",
    nextStepText:"Next",
    width: '700px',
    // renderBody: [testComponent, testComponent2],
    step: [
      {
        a11yText: "Some A11y Text",
        title: createBody("<span>STEP 1 TITLE</span>"),
        subtitle: createBody("<span>STEP 1 SUBTITLE</span>"),
        content: testComponent
      },
      {
        a11yText: "Some A11y Text",
        title: createBody("STEP 2 TITLE"),
        subtitle: createBody("STEP 2 SUBTITLE"),
        content: testComponent2
      }
    ]
  }
});
