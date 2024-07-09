import './index.css'

const TabItem = props => {
  const {tabDetails, updateStateId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    updateStateId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
