import Pagination from '../Board/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Select, Input, Button } from '../Element';
import Discussion from './Discussion';
import DiscussionContent from './DiscussionContent';
import FileList from './FileList';
import Comment from './Comment';
export default function DiscussionType ({}) {
  return (
    <div class='contents_area'>
      <Discussion />
      <DiscussionContent />
      <FileList />
      <Comment />
    </div>
  );
}
