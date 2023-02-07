import React from "react";
import {
  Card
} from "@fluentui/react-components/unstable";
import { 
  Subtitle1, Text
} from "@fluentui/react-components";

interface Task {
  id: String,
  titleTask: String,
  description: String,
  responsable: String,
  date: String,
  priority: String,
  status: String
}

export default function TaskCard() {

  return (
    <div className="task-card">
      <section>
        <Card>
          <Subtitle1 as="h4" block className="task-title">
            Title
          </Subtitle1>
          <Text >
            Description
          </Text>
          <Text >
            Responsable
          </Text>
          <div className="date-container">
            <div>
              <Text align="start">
                Date
              </Text>
            </div>
            <div>
              <Text align="end" >
                Priority
              </Text>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
