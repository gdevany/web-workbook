import React, { Component } from 'react';
import { Document } from 'react-pdf/build/entry.noworker';

class MyApp extends Component {
  state = {
    file: './gregDevanyResume2017.pdf',
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    return (
      // const { pageNumber, numPages } = this.state;

      <div>
        <Document
          file={this.state.file}
        >
        </Document>
        <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
      </div>
    );
  }
}

export default MyApp;
