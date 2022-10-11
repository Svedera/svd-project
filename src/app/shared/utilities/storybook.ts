export const fitToView = (content: string, width = 100, height = 100): string =>
  `
  <div style="
      width: ${width}vw;
      height: ${height}vh;
      border: 5px solid red;
      box-sizing: border-box;
      background: gray;">
    ${content}
  </div>
`;

export enum Category {
  Others = 'Others',

  /** Simple components with no dependencies on other components:
   * buttons, icons, toggles.
   */
  Elements = 'Elements',

  /** Represent logical pieces of functionality */
  Panels = 'Panels',

  /** Correspond to the top level components specified in routes */
  Screens = 'Screens'
}

export const getGroupName =
  (component: { name: string }, category?: Category): string => {
    const storyName = component.name.replace('Component', '');
    const categoryName = category ? category : Category.Others;
    return `${categoryName}/${storyName}`;
  };
