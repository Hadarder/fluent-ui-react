import React from 'react'
import { Popup, Divider, Icon, Text, Grid } from '@stardust-ui/react'
import { findDOMNode } from 'react-dom'

class PopupExample extends React.Component {
  ref = React.createRef<any>()
  state = { popupTarget: undefined }

  componentDidMount() {
    this.setState({ popupTarget: findDOMNode(this.ref.current) })
  }

  render() {
    return (
      <Grid columns="auto 1fr">
        {/* CUSTOM DOM ELEMENT is used as target for Popup */}
        <Popup
          target={this.state.popupTarget}
          trigger={<Icon name="question" circular bordered styles={{ cursor: 'pointer' }} />}
          content="well, yes, I am just a garbish text ¯\_(ツ)_/¯"
          position="below"
        />

        <div style={{ marginLeft: 10 }}>
          <Text>Could you guess what does this text means? :)</Text>
          <Divider />
          <Text ref={this.ref}>
            "To the lascivious looking-glass I, that love's majesty to strut before a want love's
            majesto, to the souls of York."
          </Text>
        </div>
      </Grid>
    )
  }
}

export default PopupExample
