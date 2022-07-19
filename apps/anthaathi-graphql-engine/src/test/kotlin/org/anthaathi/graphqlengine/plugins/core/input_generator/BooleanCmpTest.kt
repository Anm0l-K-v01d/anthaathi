package org.anthaathi.graphqlengine.plugins.core.input_generator

import au.com.origin.snapshots.Expect
import au.com.origin.snapshots.junit5.SnapshotExtension
import graphql.schema.idl.TypeDefinitionRegistry
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(SnapshotExtension::class)
internal class BooleanCmpTest {
    private val expect: Expect? = null

    @Test
    fun registry() {
        val typeDefinitionRegistry = TypeDefinitionRegistry()

        val result = BooleanCmp().registry(typeDefinitionRegistry)!!

        expect!!
            .serializer("graphql")
            .toMatchSnapshot(result)
    }
}