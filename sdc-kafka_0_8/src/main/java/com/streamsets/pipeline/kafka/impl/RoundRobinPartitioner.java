/*
 * Copyright 2017 StreamSets Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.streamsets.pipeline.kafka.impl;

import kafka.producer.Partitioner;
import kafka.utils.VerifiableProperties;

public class RoundRobinPartitioner implements Partitioner {

  private int lastPartition = 0;

  public RoundRobinPartitioner(VerifiableProperties props) {

  }

  @Override
  public int partition(Object key, int numPartitions) {
    lastPartition = (lastPartition + 1) % numPartitions;
    return lastPartition;
  }

}
