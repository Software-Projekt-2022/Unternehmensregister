package org.cybercity.unternehmensregister.restapi.RabbitMQ;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class Listener {

    @RabbitListener(queues = RabbitConfig.QUEUE)
    public void listener(RabbitMessage message) {
        System.out.println(message);
    }


}
