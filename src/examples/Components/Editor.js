import React, { useState, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CrossEditor } from 'crosseditor-react';

const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'color',
  'background',
  'size',
  'h1',
];
export default function Editor({ value, onChange }) {

  let editorInstance = useRef(null);

  const params = {
    Width: '100%',
    // Height: 500,
    NewToolBar: true,
    AccessibilityOption: 1,
    FullScreen: false,
  };

  const onLoaded = (_, editor) => {
    editorInstance = editor;
    console.log("🚀 ~ onLoaded ~ editor:", editor)
    // 초기화 후 사용할 수 있는 Method는 아래와 같이
    // 두번째 인자인 editor 객체를 통해서 사용할 수 있습니다.
    console.log(editorInstance.GetBodyValue());
  }

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ align: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
      },
    };
  }, []);

  const onChangeValue = (value, delta, source, editor) => {
    onChange?.(value);
  };

  return (
    <>
      {/* <ReactQuill
        theme='snow'
        style={{ height: '400px', paddingBottom: '50px' }}
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChangeValue}
      /> */}
      <CrossEditor
        name="editor1"
        params={params}
        value="<p>초기값입니다.</p>"
        onLoaded={onLoaded}
      />
    </>
  );
}
