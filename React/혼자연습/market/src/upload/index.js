import React from "react";
import {Button, Divider, Form, Input, InputNumber} from 'antd';
import './index.css';

function UploadPage () {
  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <div id="upload-container">
      <Form
        name='상품 업로드'
        onFinish={onSubmit}
      >
        <Form.Item
          name='upload'
          label={<div className="upload_label">상품이미지 등록</div>}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" alt="" />
            <span>이미지를 업로드해주세요</span>
          </div>

        </Form.Item>
        <Divider />
        <Form.Item
          label={<div
            className="upload_label"
          >판매자명</div>}
          name="seller"
          rules={[{required: true, message: '판매자이름을 입력해주세요'}]}
        >
          <Input
            className="upload_name"
            size="large"
            placeholder="이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name='name'
          label={<div className="upload_label">상품이름</div>}
          rules={[{required: true, message: '상품 이름을 입력해주세요'}]}
        >
          <Input
            className="upload_name"
            size="large"
            placeholder="상품이름을 입력해주세요"
          />
        </Form.Item>
        <Divider/>
        <Form.Item
          name="price"
          label={<div
            className="upload_price"
          >상품가격</div>}
          rules={[{required: true, message: '상품가격을 입력해주세요'}]}
        >
          <InputNumber
            className="upload_price"
            defaultValue={0}
            size="large"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name='description'
          label={<div className="upload_label">상품설명</div>}
          rules={[{required: true, message: '상품 소개를 입력해주세요'}]}
        >
          <Input.TextArea
            size="large"
            id="product-description"
            showCount
            maxLength={300}
            placeholder='상품소개를 적어주세요'
          />
        </Form.Item>
        <Divider/>
        <Form.Item>
          <Button
            id="submit-button"
            size="large"
            htmlType="submit"
          >
            상품등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UploadPage;