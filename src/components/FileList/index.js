import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink, MdClear } from 'react-icons/md';

import { Container, FileInfo, Preview} from './styles';

const FileList = ({files, onDelete}) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.id}>
      <FileInfo>
        <Preview src={uploadedFile.preview}/>
        <div>
          <strong>{uploadedFile.name}</strong>
          <span>{uploadedFile.readableSize}{uploadedFile.url && (<button onClick={() => onDelete(uploadedFile.id)}><MdClear size={16}/></button>)}</span>
        </div>
      </FileInfo>

      <div>
        {!uploadedFile.uploaded && !uploadedFile.error && (
          <CircularProgressbar styles={{
            root: { width: 24},
            path: { stroke: "#00CED1"}
          }}
          strokeWidth={10}
          value={uploadedFile.progress}
          />
        )}

        {uploadedFile.url && (
          <a href={uploadedFile.url}
          target="_blank"
          rel="noreferrer"
          >
            <MdLink style={{ marginRight: 8}} size={24} color="#222"/>
          </a>
        )}

        {uploadedFile.uploaded && (<MdCheckCircle size={24} color="#32CD32"/>)}
        {uploadedFile.error && (<MdError size={24} color="#A52A2A"/>)}
      </div>
    </li>
    ))}
  </Container>
);

export default FileList;

//FIZ UM MAP PRA MOSTRAR AS INFORMAÇÕES NA TELA PRA CADA UPLOAD FEITO
