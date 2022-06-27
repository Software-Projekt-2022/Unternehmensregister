package org.cybercity.unternehmensregister.restapi.RabbitMQ;

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
    private String messageId;
    private String message;
    private Date messageDate;

}
