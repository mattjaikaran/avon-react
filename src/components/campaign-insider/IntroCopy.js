import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class IntroCopy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      copy: '',
      editorState: null
    }
  }

  onEditClick = (e) => {
    e.preventDefault()
    this.setState({
      editorState: EditorState.createEmpty()
    })
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState
    })
  }

  render() {
    const { editorState } = this.state
    return (
      <div className="m-top-s1">
        <h1 className="title">CAMPAIGN INSIDER</h1>
        <h1 className="title-secondary">{this.props.currentCampaign}</h1>
        <div className="m-top-s3">
          <button className="btn btn-primary editor" onClick={this.onEditClick}>
          Edit
          </button>
          <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          />
          <hr className="my-5"/>
          <p className="lp blurb" value={this.state.copy}>
            Glimmer up and go ‘gram crazy in C8 with our new ultra-glam Glimmershadow Liquid Eyeshadow and Glimmersticks Metallic Eye Liners. Spotlight unlimited looks on all your socials with your online store link. Spread the sunshine on this too: For National Fragrance Day — this Thursday, March 21 only — you and your customers get a free Avon Flourish Honey Blossom travel spray with the online purchase of a full-size bottle.
          </p>
          <p className="lp blurb">
            Grab the offer code on the 21st on Instagram and share!
          </p>
        </div>
        <div className="clearfix "></div>
      </div>
    )
  }
}

export default IntroCopy
