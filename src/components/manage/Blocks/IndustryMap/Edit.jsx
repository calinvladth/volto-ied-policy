import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import BlockStyleWrapperEdit from '@eeacms/volto-block-style/BlockStyleWrapper/BlockStyleWrapperEdit';
import InlineForm from '@plone/volto/components/manage/Form/InlineForm';
import schema from './schema';
import View from './View';

const Edit = (props) => (
  <BlockStyleWrapperEdit {...props}>
    <View {...props} mode="edit" />

    <SidebarPortal selected={props.selected}>
      <InlineForm
        schema={schema}
        title={schema.title}
        onChangeField={(id, value) => {
          props.onChangeBlock(props.block, {
            ...props.data,
            [id]: value,
          });
        }}
        formData={props.data}
      />
    </SidebarPortal>
  </BlockStyleWrapperEdit>
);

export default Edit;
