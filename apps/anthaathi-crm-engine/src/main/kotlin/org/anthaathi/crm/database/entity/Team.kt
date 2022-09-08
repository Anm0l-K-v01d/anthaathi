package org.anthaathi.crm.database.entity

import org.hibernate.annotations.Type
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "team", schema = "auth")
open class Team {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "name", nullable = false)
    open var name: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "description", nullable = false)
    open var description: String? = null

    @Column(name = "parent_team_id")
    open var parentTeamId: UUID? = null

    @Column(name = "created_at", nullable = false)
    open var createdAt: OffsetDateTime? = null

    @Column(name = "created_by", nullable = false)
    open var createdBy: UUID? = null
}
