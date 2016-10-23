import React from 'react';

export default class Tabs extends React.Component {
  // props here is { title: "title", content: "content" }
  constructor(props) {
    super(props);
    this.state = { selectedTabIdx: 0 };
  }

  getTabTitles(tabs, selectedIdx) {
    return tabs.map((el, i) => {
      let elTitle = el.title;

      let selectOnOff = "tab-not-selected-title";
      if (i === selectedIdx) selectOnOff = "tab-selected-title";

      return <h1 key={i}
                 onClick={this.selectTab.bind(this, i)}
                 className={selectOnOff}>{elTitle}</h1>;
    });
  }

  selectTab(i) {
    this.setState({ selectedTabIdx: i });
  }

  render() {
    let tabs = this.props.tabs;
    let selectedIdx = this.state.selectedTabIdx;

    let selectedTabContent = tabs[selectedIdx].content;
    let tabTitles = this.getTabTitles(tabs, selectedIdx);

    return (
      <div className="tabs">
        <ul>
          <div className="tab-titles">{tabTitles}</div>
        </ul>

        <div className="tab-current-contents">
          <article>{selectedTabContent}</article>
        </div>
      </div>
    );
  }
}
