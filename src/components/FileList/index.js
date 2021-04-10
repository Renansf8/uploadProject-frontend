import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink, MdClear } from 'react-icons/md';
import './style.css'

import { Container, FileInfo, Preview } from './styles';

const FileList = ({files, onDelete}) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.id}>
      <FileInfo>
        <Preview src={uploadedFile.preview}/>
        <div>
          <strong>{uploadedFile.name}</strong>
          <span>{uploadedFile.readableSize}{uploadedFile.url && (<button onClick={() => onDelete(uploadedFile.id)}>
            <div class="deleteTooltip">
              <span class="deleteTooltipText">Excluir imagem</span>
              <MdClear size={16}/>
            </div>
            </button>)}</span>
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
        <div class="iconContainer">
          <div>
          {uploadedFile.url && (
          <a href={uploadedFile.url}
          target="_blank"
          rel="noreferrer"
          >
            <div class="urlTooltip">
              <span class="urlTooltipText">url da imagem</span>
            <MdLink style={{ marginRight: 8}} size={24} color="#222"/>
            </div>
          </a>
        )}
          </div>
          <div>
            <div class ="successTooltip">
              <span class="successTooltipText">sucesso ao enviar imagem</span>
              {uploadedFile.uploaded && (<MdCheckCircle size={24} color="#32CD32"/>)}
            </div>
            <div class="errorTooltip">
              <span class="errorTooltipText">erro ao enviar imagem!</span>
              {uploadedFile.error && (<MdError size={24} color="#A52A2A"/>)}
            </div>
          </div>
        </div>

      </div>
    </li>
    ))}
  </Container>
);

export default FileList;

