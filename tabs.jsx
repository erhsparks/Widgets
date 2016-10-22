import React from 'react';

export default class Tabs extends React.Component {
  // props here is { title: "title", content: "content" }
  constructor(props) {
    super(props);
    this.state = { selectedTabIdx: 0 };
  }

  render() {
    let tabs = this.props.tabs;
    let selectedIdx = this.state.selectedTabIdx;
    let selectedTabContent = tabs[selectedIdx].content;

    let allTitles = tabs.map((el, i) => {
      let elTitle = el.title;

      if (i === selectedIdx) {
        return <h1 key={i} className="selected-title">{elTitle}</h1>;
      } else return <h1 key={i}>{elTitle}</h1>;
    });

// console.log(tabs, allTitles, selectedTabContent);
    return (
      <div>
        <ul>
          <div className="tab-titles">{allTitles}</div>
        </ul>

        <article className="tab-current-contents">{selectedTabContent}</article>
      </div>
    );
  }
}
