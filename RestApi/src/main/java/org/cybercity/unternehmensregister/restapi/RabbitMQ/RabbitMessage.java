package org.cybercity.unternehmensregister.restapi.RabbitMQ;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RabbitMessage {
    private String event_id;
    private String event_type;
    private String event_origin;
    private Date event_time;
    @JsonProperty("content")
    private String content;
}
