import React, { useState } from 'react';
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import Header from '../Header/Header';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


const ImagePreview = () => {
    const [files, setFiles] = useState([])
    return (

        <div className="background">
            <div>
                <Header></Header>
            </div>
            <h3 className="text-center" style={{ color: "white", marginTop: '120px' }}>Image With Preview</h3>
            <br />
            <div style={{ width: '50%', height: '', marginTop: '150px', display: 'block', margin: '0 auto' }}>

                <FilePond


                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    maxFiles={20}
                    server="/api"
                    name="files" /* sets the file input name, it's filepond by default*/
                    labelIdle='<span class="filepond--label-action">Upload Image</span>'


                />

            </div>
        </div>

    );
};

export default ImagePreview;