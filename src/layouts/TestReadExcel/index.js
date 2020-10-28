import React, { Component } from "react";
import XLSX from "xlsx";
import { make_cols } from "./MakeColumns";
import { SheetJSFT } from "./type";

class ReadExcel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: {},
            data: [],
            cols: [],
        };
        this.handleFile = this.handleFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const files = e.target.files;
        if (files && files[0]) this.setState({ file: files[0] });
    }

    handleFile() {
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = (e) => {
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, {
                type: rABS ? "binary" : "array",
                bookVBA: true,
            });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws);
            this.setState(
                { data: data, cols: make_cols(ws["!ref"]) },
                () => {}
            );
        };

        if (rABS) {
            reader.readAsBinaryString(this.state.file);
        } else {
            reader.readAsArrayBuffer(this.state.file);
        }
    }

    render() {
        console.log(this.state.data)
        return (
            <div
                style={{
                    backgroundColor: "white",
                    maxWidth: "128rem",
                    margin: "0 auto",
                    minHeight: "70rem",
                }}
            >
                <div className="pageExcelReaderFile">
                    <div>
                        <label className="titleHeaderPage">
                            Upload File Excel
                        </label>
                        <br />
                        <input
                            type="file"
                            className="inputFileExcel"
                            id="file"
                            accept={SheetJSFT}
                            onChange={this.handleChange}
                        />
                        <br />
                        <input
                            className="buttonSubmit"
                            type="submit"
                            value="Confirm"
                            onClick={this.handleFile}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ReadExcel;
