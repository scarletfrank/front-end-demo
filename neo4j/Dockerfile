FROM neo4j:latest

# ENV NEO4J_AUTH=neo4j/password
ENV NEO4J_AUTH=none
ENV NEO4J_dbms_memory_pagecache_size=1G
ENV NEO4J_dbms.memory.heap.initial_size=1G
ENV NEO4J_dbms_memory_heap_max__size=1G
ENV NEO4J_dbms_security_procedures_unrestricted=gds.*
ENV NEO4J_dbms_security_procedures_allowlist=gds.*
ENV NEO4j_dbms.default_listen_address=0.0.0.0.

# COPY ./neo4j-graph-data-science-1.6.1.jar /var/lib/neo4j/plugins/

# COPY ./common /var/lib/neo4j/import/
# COPY ./20210803 /var/lib/neo4j/import/
