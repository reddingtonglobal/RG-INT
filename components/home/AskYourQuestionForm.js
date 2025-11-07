'use client';
import { Form, Input } from 'antd'
import React from 'react'

const AskYourQuestionForm = () => {
  return (
    <div>
        <Form>
            <Form.Item name="question">
                <Input
                  id="question"
                  name="question"
                  placeholder="Enter your question"
                  autoComplete="off"
                />
            </Form.Item>
        </Form>
    </div>
  )
}

export default AskYourQuestionForm