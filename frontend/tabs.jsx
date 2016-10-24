import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTabIdx: 0 };
  }

  selectTab(i) {
    this.setState({ selectedTabIdx: i });
  }

  render() {
    let { tabs } = this.props;
    let { selectedTabIdx } = this.state;

    let selectedTabContent = tabs[selectedTabIdx].content;

    return (
      <div className="tabs">
        <TabTitles tabs={tabs}
                   selectedTabIdx={selectedTabIdx}
                   selectTab={this.selectTab.bind(this)}>
        </TabTitles>

        <div className="tab-current-contents">
          <article>{selectedTabContent}</article>
        </div>
      </div>
    );
  }
}

const TabTitles = ({ tabs, selectedTabIdx, selectTab }) => (
  <div className="tab-titles">
    {tabs.map((el, i) => {
      let elTitle = el.title;

      let selectOnOff = "tab-not-selected-title";
      if (i === selectedTabIdx) selectOnOff = "tab-selected-title";

      return <h1 key={i}
                 onClick={selectTab.bind(null, i)}
                 className={selectOnOff}>{elTitle}</h1>;
    })}
  </div>
);
